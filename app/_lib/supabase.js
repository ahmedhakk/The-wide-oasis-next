import { createClient } from "@supabase/supabase-js";

// SUPABASE_URL this name is on the .env.local file that we create some constants | and to access it use process.env.VARIABLE_NAME
export const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_KEY
);
