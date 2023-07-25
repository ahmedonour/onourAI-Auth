import { createClient } from '@supabase/supabase-js';

export const supabase = createClient(
	'https://qdckntajotiqzssqiult.supabase.co',
	'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFkY2tudGFqb3RpcXpzc3FpdWx0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTAxMjk0NzAsImV4cCI6MjAwNTcwNTQ3MH0.SBU4TcE601jwi56nXqyiFUV1x4ozi4tRfSQZRcU-Vm0'
);
