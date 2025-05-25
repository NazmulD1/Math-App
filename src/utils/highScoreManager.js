import { supabase } from "./supabaseClient";

// Map of unit numbers to their table names
const UNIT_TABLES = {
  1: "UNIT_1_HIGH_SCORES", // Number Recognition and Counting
  2: "UNIT_2_HIGH_SCORES", // Basic Addition
  3: "UNIT_3_HIGH_SCORES", // Long Addition
  4: "UNIT_4_HIGH_SCORES", // Basic Subtraction
  5: "UNIT_5_HIGH_SCORES", // Long Subtraction
  6: "UNIT_6_HIGH_SCORES", // Basic Multiplication
  7: "UNIT_7_HIGH_SCORES", // Long Multiplication
  8: "UNIT_8_HIGH_SCORES", // Basic Division
  9: "UNIT_9_HIGH_SCORES", // Division with Remainders
  10: "UNIT_10_HIGH_SCORES", // Long Division
  11: "UNIT_11_HIGH_SCORES", // Fractions
  12: "UNIT_12_HIGH_SCORES", // Decimals
};

/**
 * Updates the high score for a specific unit if the new score is higher
 * @param {number} unitNumber - The unit number (1-10)
 * @param {number} newScore - The new score to check
 * @returns {Promise<{success: boolean, message: string, highScore: number}>}
 */
export const updateHighScore = async (unitNumber, newScore) => {
  try {
    /*
    console.log(
      "Updating high score for unit",
      unitNumber,
      "with score",
      newScore
    );
    */

    const tableName = UNIT_TABLES[unitNumber];
    if (!tableName) {
      throw new Error("Invalid unit number");
    }
    // console.log("Using table:", tableName);

    // Get the current user
    const {
      data: { user },
      error: userError,
    } = await supabase.auth.getUser();
    if (userError) {
      console.error("Error getting user:", userError);
      throw userError;
    }
    if (!user) {
      console.log("No user found - user not authenticated");
      throw new Error("User not authenticated");
    }
    console.log("User authenticated");

    // Get current high score
    const { data: currentScore, error: fetchError } = await supabase
      .from(tableName)
      .select("high_score")
      .eq("user_id", user.id)
      .single();

    if (fetchError) {
      if (fetchError.code === "PGRST116") {
        console.log("No existing high score found");
      } else {
        console.error("Error fetching current score:", fetchError);
        throw fetchError;
      }
    }

    // If no current score exists or new score is higher, update it
    if (!currentScore || newScore > currentScore.high_score) {
      console.log("Updating high score to:", newScore);
      const { error: upsertError } = await supabase.from(tableName).upsert({
        user_id: user.id,
        high_score: newScore,
      });

      if (upsertError) {
        console.error("Error upserting high score:", upsertError);
        throw upsertError;
      }

      console.log("High score updated successfully");
      return {
        success: true,
        message: "New high score achieved!",
        highScore: newScore,
      };
    }

    console.log("Current high score maintained:", currentScore.high_score);
    return {
      success: true,
      message: "Current high score maintained",
      highScore: currentScore.high_score,
    };
  } catch (error) {
    console.error("Error updating high score:", error);
    return {
      success: false,
      message: error.message,
      highScore: null,
    };
  }
};

/**
 * Gets the high score for a specific unit
 * @param {number} unitNumber - The unit number (1-10)
 * @returns {Promise<{success: boolean, highScore: number, message: string}>}
 */
export const getHighScore = async (unitNumber) => {
  try {
    const tableName = UNIT_TABLES[unitNumber];
    if (!tableName) {
      throw new Error("Invalid unit number");
    }

    // Get the current user
    const {
      data: { user },
    } = await supabase.auth.getUser();
    if (!user) {
      throw new Error("User not authenticated");
    }

    const { data, error } = await supabase
      .from(tableName)
      .select("high_score")
      .eq("user_id", user.id)
      .single();

    if (error) {
      if (error.code === "PGRST116") {
        return {
          success: true,
          highScore: 0,
          message: "No high score yet",
        };
      }
      throw error;
    }

    return {
      success: true,
      highScore: data.high_score,
      message: "High score retrieved successfully",
    };
  } catch (error) {
    console.error("Error getting high score:", error);
    return {
      success: false,
      highScore: null,
      message: error.message,
    };
  }
};
