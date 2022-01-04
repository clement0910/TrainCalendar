import { Calendar } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import bootstrapPlugin from '@fullcalendar/bootstrap';
import listPlugin from '@fullcalendar/list';
import 'bootstrap/dist/css/bootstrap.css';
import '@fortawesome/fontawesome-free/css/all.css';

const initFullCalendar = () => {
    const calendarEl = document.getElementById('calendar');
    if (calendarEl) {
        let calendar = new Calendar(calendarEl, {
            plugins: [ dayGridPlugin, timeGridPlugin, listPlugin, bootstrapPlugin ],
            initialView: 'timeGridWeek',
            themeSystem: 'bootstrap',
            initialDate: '2018-01-12',
            navLinks: true, // can click day/week names to navigate views
            editable: true,
            dayMaxEvents: true, // allow "more" link when too many events
            events: [
                {
                    title: 'All Day Event',
                    start: '2018-01-01',
                },
                {
                    title: 'Long Event',
                    start: '2018-01-07',
                    end: '2018-01-10'
                },
                {
                    groupId: 999,
                    title: 'Repeating Event',
                    start: '2018-01-09T16:00:00'
                },
                {
                    groupId: 999,
                    title: 'Repeating Event',
                    start: '2018-01-16T16:00:00'
                },
                {
                    title: 'Conference',
                    start: '2018-01-11',
                    end: '2018-01-13'
                },
                {
                    title: 'Meeting',
                    start: '2018-01-12T10:30:00',
                    end: '2018-01-12T12:30:00'
                },
                {
                    title: 'Lunch',
                    start: '2018-01-12T12:00:00'
                },
                {
                    title: 'Meeting',
                    start: '2018-01-12T14:30:00'
                },
                {
                    title: 'Happy Hour',
                    start: '2018-01-12T17:30:00'
                },
                {
                    title: 'Dinner',
                    start: '2018-01-12T20:00:00'
                },
                {
                    title: 'Birthday Party',
                    start: '2018-01-13T07:00:00'
                },
                {
                    title: 'Click for Google',
                    url: 'http://google.com/',
                    start: '2018-01-28'
                }
            ]
        });
        calendar.render();
    }
};


export { initFullCalendar }