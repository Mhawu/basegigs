import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://remimcazgepggxklvuan.supabase.co';

const supabaseAnonKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJlbWltY2F6Z2VwZ2d4a2x2dWFuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjY1OTY4ODcsImV4cCI6MjA4MjE3Mjg4N30.dHAvStF7sAoImIYR_N-T_rG1O8R-6FX_4LHj2lcuPiI';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
