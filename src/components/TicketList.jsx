import React from 'react';
import Ticket from './Ticket';
import PropTypes from 'prop-types';
import Moment from 'moment';

function TicketList(props){
  return (
    <div>
      <hr/>
      {Object.keys(props.ticketList).map(function(ticketId) {
        var ticket = props.ticketList[ticketId];
        return <Ticket names={ticket.names}
          location={ticket.location}
          issue={ticket.issue}
          formattedWaitTime={ticket.formattedWaitTime}
          currentRouterPath={props.currentRouterPath}
          key={ticketId}
          id={ticketId}/>;
      })}
    </div>
  );
}

TicketList.propTypes = {
  ticketList: PropTypes.objectOf(PropTypes.shape({
    names: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    issue: PropTypes.string,
    timeOpen: PropTypes.instanceOf(Moment).isRequired,
    id: PropTypes.string.isRequired,
    formattedWaitTime: PropTypes.string.isRequired
  })),
  currentRouterPath: PropTypes.string,
};

export default TicketList;
