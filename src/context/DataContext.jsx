import React, { createContext, useContext, useState, useEffect } from 'react';
import { createClient } from '@supabase/supabase-js';

const DataContext = createContext(null);

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';
const supabase = createClient(supabaseUrl, supabaseAnonKey);

const defaultNotices = [
  {
    id: 'notice-1',
    title: 'End Semester Practical & Theory Examination Schedule (Nov/Dec 2026)',
    date: '2026-08-10',
    website_link: 'https://gcee.ac.in',
    picture_link: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'notice-2',
    title: 'National Conference on Sustainable Civil Infrastructure (NCSCI-2026)',
    date: '2026-08-08',
    website_link: 'https://gcee.ac.in',
    picture_link: 'https://images.unsplash.com/photo-1541888946425-d0fbb186a5b3?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'notice-3',
    title: 'Call for Civil Engineering Student Research & Internship Submissions',
    date: '2026-08-05',
    website_link: 'https://gcee.ac.in',
    picture_link: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80'
  }
];

const defaultEvents = [
  {
    id: 'event-1',
    title: 'Advanced Structural Health Monitoring Workshop',
    date: '2026-08-25',
    time: '10:00 AM - 04:00 PM',
    venue: 'Main Auditorium & CAD Lab',
    website_link: 'https://gcee.ac.in',
    picture_link: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'event-2',
    title: 'Guest Lecture: Smart Concrete Technology & Green Buildings',
    date: '2026-09-02',
    time: '11:00 AM - 01:00 PM',
    venue: 'Civil Seminar Hall',
    website_link: 'https://gcee.ac.in',
    picture_link: 'https://images.unsplash.com/photo-1517581177682-a085bb7ffb15?auto=format&fit=crop&w=800&q=80'
  }
];

export const DataProvider = ({ children }) => {
  const [notices, setNoticesState] = useState(() => {
    try {
      const saved = localStorage.getItem('gcee_notices');
      const parsed = saved ? JSON.parse(saved) : [];
      return parsed && parsed.length > 0 ? parsed : defaultNotices;
    } catch (e) {
      return defaultNotices;
    }
  });

  const [events, setEventsState] = useState(() => {
    try {
      const saved = localStorage.getItem('gcee_events');
      const parsed = saved ? JSON.parse(saved) : [];
      return parsed && parsed.length > 0 ? parsed : defaultEvents;
    } catch (e) {
      return defaultEvents;
    }
  });

  const [faculty, setFacultyState] = useState(() => {
    try {
      const saved = localStorage.getItem('gcee_faculty');
      return saved ? JSON.parse(saved) : [];
    } catch (e) {
      return [];
    }
  });

  const [loading, setLoading] = useState(true);

  // Sync state helpers with localStorage
  const setNotices = (updater) => {
    setNoticesState(prev => {
      const next = typeof updater === 'function' ? updater(prev) : updater;
      try { localStorage.setItem('gcee_notices', JSON.stringify(next)); } catch (e) {}
      return next;
    });
  };

  const setEvents = (updater) => {
    setEventsState(prev => {
      const next = typeof updater === 'function' ? updater(prev) : updater;
      try { localStorage.setItem('gcee_events', JSON.stringify(next)); } catch (e) {}
      return next;
    });
  };

  const setFaculty = (updater) => {
    setFacultyState(prev => {
      const next = typeof updater === 'function' ? updater(prev) : updater;
      try { localStorage.setItem('gcee_faculty', JSON.stringify(next)); } catch (e) {}
      return next;
    });
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        
        // Fetch notices, events, and faculty directly from Supabase
        const [noticesRes, eventsRes, facultyRes] = await Promise.all([
          supabase.from('notices').select('*').order('created_at', { ascending: false }),
          supabase.from('events').select('*').order('created_at', { ascending: false }),
          supabase.from('faculty').select('*').order('created_at', { ascending: true })
        ]);

        if (noticesRes.error) console.error('Error fetching notices:', noticesRes.error.message);
        if (eventsRes.error) console.error('Error fetching events:', eventsRes.error.message);
        if (facultyRes.error) console.error('Error fetching faculty:', facultyRes.error.message);

        if (noticesRes.data && noticesRes.data.length > 0) {
          setNotices(prev => noticesRes.data.map(item => {
            const match = prev.find(p => String(p.id) === String(item.id));
            return {
              ...item,
              picture_link: item.picture_link || match?.picture_link || '',
              website_link: item.website_link || match?.website_link || ''
            };
          }));
        }
        if (eventsRes.data && eventsRes.data.length > 0) {
          setEvents(prev => eventsRes.data.map(item => {
            const match = prev.find(p => String(p.id) === String(item.id));
            return {
              ...item,
              picture_link: item.picture_link || match?.picture_link || '',
              website_link: item.website_link || match?.website_link || ''
            };
          }));
        }
        if (facultyRes.data && facultyRes.data.length > 0) {
          setFaculty(prev => facultyRes.data.map(item => {
            const match = prev.find(p => String(p.id) === String(item.id));
            return {
              ...item,
              picture_link: item.picture_link || match?.picture_link || '',
              website_link: item.website_link || match?.website_link || ''
            };
          }));
        }
      } catch (error) {
        console.error('Error fetching data from Supabase:', error);
      } finally {
        setLoading(false);
      }
    };

    if (supabaseUrl && supabaseAnonKey && !supabaseUrl.includes('your-project-id')) {
      fetchData();
    } else {
      setLoading(false);
    }
  }, []);

  // Notice operations
  const addNotice = async (noticePayload) => {
    const payload = typeof noticePayload === 'string' 
      ? { title: noticePayload, date: new Date().toISOString().split('T')[0] }
      : { 
          title: noticePayload.title || '',
          date: noticePayload.date || new Date().toISOString().split('T')[0],
          website_link: noticePayload.website_link || '',
          picture_link: noticePayload.picture_link || ''
        };

    const newItem = { id: Date.now().toString(), ...payload };
    setNotices(prev => [newItem, ...prev.filter(n => String(n.id) !== String(newItem.id))]);

    if (!supabaseUrl || !supabaseAnonKey || supabaseUrl.includes('your-project-id')) return;

    try {
      const { data, error } = await supabase
        .from('notices')
        .insert([payload])
        .select();

      if (error) {
        console.warn('Notice insert with optional fields failed, retrying basic fields:', error.message);
        const basicPayload = { title: payload.title };
        const basicRes = await supabase.from('notices').insert([basicPayload]).select();
        if (basicRes.data && basicRes.data[0]) {
          setNotices(prev => prev.map(item => String(item.id) === String(newItem.id) ? { ...basicRes.data[0], date: payload.date, website_link: payload.website_link, picture_link: payload.picture_link } : item));
        }
      } else if (data && data[0]) {
        setNotices(prev => prev.map(item => String(item.id) === String(newItem.id) ? { ...data[0], picture_link: payload.picture_link || data[0].picture_link, website_link: payload.website_link || data[0].website_link } : item));
      }
    } catch (error) {
      console.error('Error inserting notice:', error);
    }
  };

  const deleteNotice = async (id) => {
    setNotices(prev => prev.filter(n => String(n.id) !== String(id)));
    if (!supabaseUrl || !supabaseAnonKey || supabaseUrl.includes('your-project-id')) return;
    try {
      const { error } = await supabase.from('notices').delete().eq('id', id);
      if (error) console.error('Error deleting notice:', error.message);
    } catch (error) {
      console.error('Error deleting notice:', error);
    }
  };

  const updateNotice = async (id, noticePayload) => {
    const payload = {
      title: noticePayload.title || '',
      date: noticePayload.date || new Date().toISOString().split('T')[0],
      website_link: noticePayload.website_link || '',
      picture_link: noticePayload.picture_link || ''
    };

    setNotices(prev => prev.map(n => String(n.id) === String(id) ? { ...n, ...payload } : n));

    if (!supabaseUrl || !supabaseAnonKey || supabaseUrl.includes('your-project-id')) return;

    try {
      const { data, error } = await supabase
        .from('notices')
        .update(payload)
        .eq('id', id)
        .select();

      if (error) {
        console.warn('Notice update with optional fields failed, retrying basic fields:', error.message);
        const basicPayload = { title: payload.title };
        const basicRes = await supabase.from('notices').update(basicPayload).eq('id', id).select();
        if (basicRes.data && basicRes.data[0]) {
          setNotices(prev => prev.map(item => String(item.id) === String(id) ? { ...item, ...basicRes.data[0], date: payload.date, website_link: payload.website_link, picture_link: payload.picture_link } : item));
        }
      } else if (data && data[0]) {
        setNotices(prev => prev.map(item => String(item.id) === String(id) ? { ...data[0], picture_link: payload.picture_link || data[0].picture_link, website_link: payload.website_link || data[0].website_link } : item));
      }
    } catch (error) {
      console.error('Error updating notice:', error);
    }
  };

  // Event operations
  const addEvent = async (eventData) => {
    const payload = {
      title: eventData.title || '',
      date: eventData.date || new Date().toISOString().split('T')[0],
      venue: eventData.venue || '',
      time: eventData.time || '',
      website_link: eventData.website_link || '',
      picture_link: eventData.picture_link || ''
    };

    const newItem = { id: Date.now().toString(), ...payload };
    setEvents(prev => [newItem, ...prev.filter(e => String(e.id) !== String(newItem.id))]);

    if (!supabaseUrl || !supabaseAnonKey || supabaseUrl.includes('your-project-id')) return;

    try {
      const { data, error } = await supabase
        .from('events')
        .insert([payload])
        .select();

      if (error) {
        console.warn('Event insert with optional fields failed, retrying basic fields:', error.message);
        const basicPayload = {
          title: payload.title,
          date: payload.date,
          venue: payload.venue,
          time: payload.time
        };
        const basicRes = await supabase.from('events').insert([basicPayload]).select();
        if (basicRes.data && basicRes.data[0]) {
          setEvents(prev => prev.map(item => String(item.id) === String(newItem.id) ? { ...basicRes.data[0], website_link: payload.website_link, picture_link: payload.picture_link } : item));
        }
      } else if (data && data[0]) {
        setEvents(prev => prev.map(item => String(item.id) === String(newItem.id) ? { ...data[0], picture_link: payload.picture_link || data[0].picture_link, website_link: payload.website_link || data[0].website_link } : item));
      }
    } catch (error) {
      console.error('Error inserting event:', error);
    }
  };

  const deleteEvent = async (id) => {
    setEvents(prev => prev.filter(e => String(e.id) !== String(id)));
    if (!supabaseUrl || !supabaseAnonKey || supabaseUrl.includes('your-project-id')) return;
    try {
      const { error } = await supabase.from('events').delete().eq('id', id);
      if (error) console.error('Error deleting event:', error.message);
    } catch (error) {
      console.error('Error deleting event:', error);
    }
  };

  const updateEvent = async (id, eventData) => {
    const payload = {
      title: eventData.title || '',
      date: eventData.date || new Date().toISOString().split('T')[0],
      venue: eventData.venue || '',
      time: eventData.time || '',
      website_link: eventData.website_link || '',
      picture_link: eventData.picture_link || ''
    };

    setEvents(prev => prev.map(e => String(e.id) === String(id) ? { ...e, ...payload } : e));

    if (!supabaseUrl || !supabaseAnonKey || supabaseUrl.includes('your-project-id')) return;

    try {
      const { data, error } = await supabase
        .from('events')
        .update(payload)
        .eq('id', id)
        .select();

      if (error) {
        console.warn('Event update with optional fields failed, retrying basic fields:', error.message);
        const basicPayload = {
          title: payload.title,
          date: payload.date,
          venue: payload.venue,
          time: payload.time
        };
        const basicRes = await supabase.from('events').update(basicPayload).eq('id', id).select();
        if (basicRes.data && basicRes.data[0]) {
          setEvents(prev => prev.map(item => String(item.id) === String(id) ? { ...item, ...basicRes.data[0], website_link: payload.website_link, picture_link: payload.picture_link } : item));
        }
      } else if (data && data[0]) {
        setEvents(prev => prev.map(item => String(item.id) === String(id) ? { ...data[0], picture_link: payload.picture_link || data[0].picture_link, website_link: payload.website_link || data[0].website_link } : item));
      }
    } catch (error) {
      console.error('Error updating event:', error);
    }
  };

  // Faculty operations
  const addFacultyMember = async (facultyData) => {
    const payload = {
      name: facultyData.name || '',
      designation: facultyData.designation || 'Assistant Professor',
      qualification: facultyData.qualification || '',
      specialization: facultyData.specialization || '',
      experience: facultyData.experience || '',
      email: facultyData.email || '',
      website_link: facultyData.website_link || '',
      picture_link: facultyData.picture_link || ''
    };

    const newItem = { id: Date.now().toString(), ...payload };
    setFaculty(prev => [...prev.filter(f => String(f.id) !== String(newItem.id)), newItem]);

    if (!supabaseUrl || !supabaseAnonKey || supabaseUrl.includes('your-project-id')) return;

    try {
      const { data, error } = await supabase
        .from('faculty')
        .insert([payload])
        .select();

      if (error) {
        console.warn('Faculty insert with optional fields failed, retrying basic fields:', error.message);
        const basicPayload = {
          name: payload.name,
          designation: payload.designation,
          qualification: payload.qualification,
          specialization: payload.specialization,
          experience: payload.experience,
          email: payload.email
        };
        const basicRes = await supabase.from('faculty').insert([basicPayload]).select();
        if (basicRes.data && basicRes.data[0]) {
          setFaculty(prev => prev.map(item => item.id === newItem.id ? { ...basicRes.data[0], website_link: payload.website_link, picture_link: payload.picture_link } : item));
        }
      } else if (data && data[0]) {
        setFaculty(prev => prev.map(item => item.id === newItem.id ? data[0] : item));
      }
    } catch (error) {
      console.error('Error inserting faculty member:', error);
    }
  };

  const deleteFacultyMember = async (id) => {
    setFaculty(prev => prev.filter(f => String(f.id) !== String(id)));
    if (!supabaseUrl || !supabaseAnonKey || supabaseUrl.includes('your-project-id')) return;
    try {
      const { error } = await supabase.from('faculty').delete().eq('id', id);
      if (error) console.error('Error deleting faculty member:', error.message);
    } catch (error) {
      console.error('Error deleting faculty member:', error);
    }
  };

  const updateFacultyMember = async (id, facultyData) => {
    const payload = {
      name: facultyData.name || '',
      designation: facultyData.designation || 'Assistant Professor',
      qualification: facultyData.qualification || '',
      specialization: facultyData.specialization || '',
      experience: facultyData.experience || '',
      email: facultyData.email || '',
      website_link: facultyData.website_link || '',
      picture_link: facultyData.picture_link || ''
    };

    setFaculty(prev => prev.map(f => String(f.id) === String(id) ? { ...f, ...payload } : f));

    if (!supabaseUrl || !supabaseAnonKey || supabaseUrl.includes('your-project-id')) return;

    try {
      const { data, error } = await supabase
        .from('faculty')
        .update(payload)
        .eq('id', id)
        .select();

      if (error) {
        console.warn('Faculty update with optional fields failed, retrying basic fields:', error.message);
        const basicPayload = {
          name: payload.name,
          designation: payload.designation,
          qualification: payload.qualification,
          specialization: payload.specialization,
          experience: payload.experience,
          email: payload.email
        };
        const basicRes = await supabase.from('faculty').update(basicPayload).eq('id', id).select();
        if (basicRes.data && basicRes.data[0]) {
          setFaculty(prev => prev.map(item => String(item.id) === String(id) ? { ...item, ...basicRes.data[0], website_link: payload.website_link, picture_link: payload.picture_link } : item));
        }
      } else if (data && data[0]) {
        setFaculty(prev => prev.map(item => String(item.id) === String(id) ? data[0] : item));
      }
    } catch (error) {
      console.error('Error updating faculty member:', error);
    }
  };

  return (
    <DataContext.Provider value={{
      notices,
      events,
      faculty,
      loading,
      addNotice,
      deleteNotice,
      updateNotice,
      addEvent,
      deleteEvent,
      updateEvent,
      addFacultyMember,
      deleteFacultyMember,
      updateFacultyMember
    }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error('useData must be used within a DataProvider');
  }
  return context;
};
