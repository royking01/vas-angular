import { Showtime } from '../Models/ShowTime';
import { movies } from './Movies';
// import { cinemas } from './Cinemas';

export const showTime = [
  {
      id: 1,
      name: 'Vas Lekki',
      location: 'Lekki',
      Movies: [movies],
      showtime: [
        {
          title: movies[0].title,
          showing: [
            { Monday: ['11:04AM', '3:45PM', '8:00PM'] },
            { Tuesday: ['10:05AM', '3:45PM', '8:00PM'] },
            { Wednesday: ['11:45AM', '3:12PM', '7:25PM'] },
            { Thursday: ['12:00PM', '4:O5PM', '8:45PM'] },
            { Friday: ['9:04AM', '1:45PM', '8:00PM'] },
            { Saturday: ['12:25AM', '3:45PM', '8:00PM'] },
            { Sunday: ['9:55AM', '2:45PM', '6:30PM'] },
          ],
        },
        {
          title: movies[1].title,
          showing: [
            { Monday: ['12:10PM', '3:15PM', '7:45PM'] },
            { Tuesday: ['9:55AM', '2:45PM', '6:30PM'] },
            { Wednesday: ['11:04AM', '3:45PM', '8:00PM'] },
            { Thursday: ['11:04AM', '1:45PM', '6:45PM'] },
            { Friday: ['9:00PM', '1:15PM', '5:45PM'] },
            { Saturday: ['2:00PM', '5:15PM', '7:45PM'] },
            { Sunday: ['9:00AM', '3:15PM', '7:45PM'] },
          ],
        },
        {
          title: movies[2].title,
          showing: [
            { Monday: ['11:04AM', '3:45PM', '8:00PM'] },
            { Tuesday: ['11:04AM', '3:45PM', '8:00PM'] },
            { Wednesday: ['11:45AM', '3:12PM', '7:25PM'] },
            { Thursday: ['12:05PM', '4:O5PM', '8:45PM'] },
            { Friday: ['9:04AM', '1:45PM', '8:00PM'] },
            { Saturday: ['12:25AM', '3:45PM', '8:00PM'] },
            { Sunday: ['9:55AM', '2:45PM', '6:30PM'] },
          ],
        },
        {
          title: movies[3].title,
          showing: [
            { Monday: ['8:55AM', '1:05PM', '6:30PM'] },
            { Tuesday: ['10:04AM', '3:05PM', '7:10PM'] },
            { Wednesday: ['11:25AM', '3:20PM', '5:55PM'] },
            { Thursday: ['12:30PM', '4:O5PM', '8:45PM'] },
            { Friday: ['9:04AM', '4:45PM', '8:00PM'] },
            { Saturday: ['12:25AM', '3:45PM', '8:00PM'] },
            { Sunday: ['10:55AM', '3:45PM', '7:30PM'] },
          ],
        },
      ],
  },
  {
    
      id: 2,
      name: 'Vas Ajah',
      location: 'Ajah',
      Movies: [movies],
      showtime: [
        {
          title: movies[0].title,
          showing: [
            { Monday: ['11:04AM', '3:45PM', '8:00PM'] },
            { Tuesday: ['11:04AM', '3:45PM', '8:00PM'] },
            { Wednesday: ['11:45AM', '3:12PM', '7:25PM'] },
            { Thursday: ['12:00PM', '4:O5PM', '8:45PM'] },
            { Friday: ['9:04AM', '1:45PM', '8:00PM'] },
            { Saturday: ['12:25AM', '3:45PM', '8:00PM'] },
            { Sunday: ['9:55AM', '2:45PM', '6:30PM'] },
          ],
        },
        {
          title: movies[1].title,
          showing: [
            { Monday: ['12:00PM', '3:15PM', '7:45PM'] },
            { Tuesday: ['9:55AM', '2:45PM', '6:30PM'] },
            { Wednesday: ['11:04AM', '3:45PM', '8:00PM'] },
            { Thursday: ['11:04AM', '1:45PM', '6:45PM'] },
            { Friday: ['9:00PM', '1:15PM', '5:45PM'] },
            { Saturday: ['2:00PM', '5:15PM', '7:45PM'] },
            { Sunday: ['9:00AM', '3:15PM', '7:45PM'] },
          ],
        },
        {
          title: movies[2].title,
          showing: [
            { Monday: ['12:00PM', '3:15PM', '7:45PM'] },
            { Tuesday: ['9:55AM', '2:45PM', '6:30PM'] },
            { Wednesday: ['11:04AM', '3:45PM', '8:00PM'] },
            { Thursday: ['11:04AM', '1:45PM', '6:45PM'] },
            { Friday: ['9:00PM', '1:15PM', '5:45PM'] },
            { Saturday: ['2:00PM', '5:15PM', '7:45PM'] },
            { Sunday: ['9:00AM', '3:15PM', '7:45PM'] },
          ],
        },
        {
          title: movies[3].title,
          showing: [
            { Monday: ['11:04AM', '3:45PM', '8:00PM'] },
            { Tuesday: ['11:04AM', '3:45PM', '8:00PM'] },
            { Wednesday: ['11:45AM', '3:12PM', '7:25PM'] },
            { Thursday: ['12:00PM', '4:O5PM', '8:45PM'] },
            { Friday: ['9:04AM', '1:45PM', '8:00PM'] },
            { Saturday: ['12:25AM', '3:45PM', '8:00PM'] },
            { Sunday: ['9:55AM', '2:45PM', '6:30PM'] },
          ],
        },
        {
          title: movies[3].title,
          showing: [
            { Monday: ['11:04AM', '3:45PM', '8:00PM'] },
            { Tuesday: ['11:04AM', '3:45PM', '8:00PM'] },
            { Wednesday: ['11:45AM', '3:12PM', '7:25PM'] },
            { Thursday: ['12:00PM', '4:O5PM', '8:45PM'] },
            { Friday: ['9:04AM', '1:45PM', '8:00PM'] },
            { Saturday: ['12:25AM', '3:45PM', '8:00PM'] },
            { Sunday: ['9:55AM', '2:45PM', '6:30PM'] },
          ],
        },
      ],
  
  },
  {
    
      id: 3,
      name: 'Vas Gbagada',
      location: 'Gbagada',
      Movies: [movies],
      showtime: [
        {
          title: movies[0].title,
          showing: [
            { Monday: ['11:04AM', '2:45PM', '8:00PM'] },
            { Tuesday: ['11:04AM', '3:45PM', '8:00PM'] },
            { Wednesday: ['10:35AM', '3:12PM', '7:25PM'] },
            { Thursday: ['12:00PM', '4:O5PM', '8:45PM'] },
            { Friday: ['9:04AM', '1:45PM', '8:00PM'] },
            { Saturday: ['12:25AM', '3:45PM', '8:00PM'] },
            { Sunday: ['10:55AM', '2:45PM', '6:30PM'] },
          ],
        },
        {
          title: movies[1].title,
          showing: [
            { Monday: ['11:00AM', '4:15PM', '8:45PM'] },
            { Tuesday: ['10:55AM', '2:45PM', '6:30PM'] },
            { Wednesday: ['11:04AM', '3:45PM', '8:00PM'] },
            { Thursday: ['11:04AM', '1:45PM', '6:45PM'] },
            { Friday: ['9:00PM', '1:15PM', '5:45PM'] },
            { Saturday: ['2:00PM', '5:15PM', '7:45PM'] },
            { Sunday: ['9:00AM', '3:15PM', '7:45PM'] },
          ],
        },
        {
          title: movies[2].title,
          showing: [
            { Monday: ['10:00AM', '3:25PM', '7:15PM'] },
            { Tuesday: ['11:55AM', '1:10PM', '5:30PM'] },
            { Wednesday: ['9:05AM', '1:35PM', '4:00PM'] },
            { Thursday: ['12:04AM', '2:00PM', '7:55PM'] },
            { Friday: ['8:55PM', '12:10PM', '6:45PM'] },
            { Saturday: ['12:00PM', '4:15PM', '8:00PM'] },
            { Sunday: ['10:00AM', '3:15PM', '6:45PM'] },
          ],
        },
        {
          title: movies[3].title,
          showing: [
            { Monday: ['11:04AM', '3:45PM', '8:05PM'] },
            { Tuesday: ['11:25AM', '3:10PM', '8:00PM'] },
            { Wednesday: ['11:45AM', '2:25PM', '7:25PM'] },
            { Thursday: ['12:00PM', '4:55PM', '8:45PM'] },
            { Friday: ['11:04AM', '3:45PM', '8:10PM'] },
            { Saturday: ['12:25AM', '3:45PM', '8:00PM'] },
            { Sunday: ['10:55AM', '3:15PM', '7:25PM'] },
          ],
        },
      ],
    },
];
