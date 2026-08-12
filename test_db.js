import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://eozyfcwyhdwxwnulgyxn.supabase.co';
const supabaseAnonKey = 'sb_publishable_SUGRNAjR7-IXXkvQAvnbSg_D2JUOmu3';

const supabase = createClient(supabaseUrl, supabaseAnonKey);

async function testInsert() {
  console.log('--- TESTING SUPABASE INSERT ---');
  
  // Test Insert Event
  const newEvent = {
    title: 'CIVESTA 2026 Symposium',
    date: '2026-09-12',
    venue: 'Main Auditorium',
    time: '09:00 AM',
    website_link: 'https://civil-gcee.vercel.app',
    picture_link: ''
  };

  const eventRes = await supabase.from('events').insert([newEvent]).select();
  console.log('Event Insert Result:', JSON.stringify(eventRes, null, 2));

  // Test Insert Notice
  const newNotice = {
    title: 'Lab Examinations Schedule Released',
    date: '2026-08-11',
    website_link: 'https://civil-gcee.vercel.app',
    picture_link: ''
  };

  const noticeRes = await supabase.from('notices').insert([newNotice]).select();
  console.log('Notice Insert Result:', JSON.stringify(noticeRes, null, 2));
}

testInsert();
