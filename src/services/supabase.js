
import { createClient } from '@supabase/supabase-js'

export const supabaseUrl = 'https://hjmcygyuekvbjudmmiia.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhqbWN5Z3l1ZWt2Ymp1ZG1taWlhIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTUwNTc3NzQsImV4cCI6MjAxMDYzMzc3NH0.gwOZ_NpozPomKgWxQqsnYWXrn6QJ3wgEs9dNxBkg-74"
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase