import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://idxdzxjgelojrrqdywtv.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlkeGR6eGpnZWxvanJycWR5d3R2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDczODczMzMsImV4cCI6MjA2Mjk2MzMzM30.ZHf1o57zJSBlNh-zcFgKmXklDzpaPVX2DzINAqwhIW8'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
