import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://waxvmccwpmqjepheeuza.supabase.co";
const supabaseKey =
  "***REMOVED***";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
