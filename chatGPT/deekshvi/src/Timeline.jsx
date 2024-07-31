/* eslint-disable no-unused-vars */
import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaHeart } from 'react-icons/fa';

const Timeline = () => {
  const events = [
    { date: '10th January , 2023', title: 'First Chat', description: 'We crossed paths for the first time online because of bumble' },
    { date: '7th September, 2023', title: 'First Meet/First kiss', description: 'Our unforgettable first meetup where we first kissed also' },
    { date: '9th November, 2023', title: 'First Trip Together', description: 'Went to manali together and felt like two people living their dream life' },
    { date: '31 December, 2023', title: 'Celebrating new Year', description: 'Celebrated our first new year together with a new year kiss' },
  ];

  return (
    <div className="mb-4  mt-5 text-maroon ">
      <h2 className="text-center mb-4">Our Love Story Timeline</h2>
      <VerticalTimeline>
        {events.map((event, index) => (
          <VerticalTimelineElement
            key={index}
            className="vertical-timeline-element--work element"
            contentStyle={{ background: 'rgb(255, 192, 203)', color: 'maroon' }}
            contentArrowStyle={{ borderRight: '7px solid  rgb(255, 192, 203)' }}
            date={event.date}
            iconStyle={{ background: 'rgb(255, 64, 129)', color: '#fff' }}
            icon={<FaHeart />}
          >
            <h3 className="vertical-timeline-element-title">{event.title}</h3>
            <p>{event.description}</p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
};

export default Timeline;