import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://ngtkzsgnpsvpvjkzanat.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5ndGt6c2ducHN2cHZqa3phbmF0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDUwMDY1OTAsImV4cCI6MjA2MDU4MjU5MH0.pe0WB_rOAAmMRU7-naeEVusg4ETDtfiJ4OUceRWNbr0";

export const supabase = createClient(supabaseUrl, supabaseKey);