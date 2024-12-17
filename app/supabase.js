// import { createClient } from "@supabase/supabase-js";
// const supabaseUrl = "https://gszajdhyedrshftlwqaq.supabase.co";
// const supabaseKey = process.env.SUPABASE_KEY;
// const supabase = createClient(supabaseUrl, supabaseKey);

// export default supabase;

import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://gszajdhyedrshftlwqaq.supabase.co";

const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdzemFqZGh5ZWRyc2hmdGx3cWFxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjczNzQwMDcsImV4cCI6MjA0Mjk1MDAwN30.5SHUf9TPeORGrb7_kB4j3s_JwNXPeAwqxgw4u0LUHW8";

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
