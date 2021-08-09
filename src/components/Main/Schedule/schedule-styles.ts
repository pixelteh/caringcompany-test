import { makeStyles } from "@material-ui/core";
import { Colors } from '../../../theme';

const useStyles = makeStyles({
  root: {
    backgroundColor: Colors.blackTwo,
    color: 'white',
    borderColor: Colors.black,
    '& table.fc-scrollgrid.fc-scrollgrid-liquid': {
      border: 'none',
    },
    '& .fc-timegrid-slot-label.fc-timegrid-slot-minor': {
      border: 'transparent',
    },
    '& .fc-header-toolbar': {
      display: 'none',
    },
    '& tr.fc-scrollgrid-section.fc-scrollgrid-section-body:first-child': {
      display: 'none',
    },
    '& tr.fc-scrollgrid-section:nth-child(2)': {
      display: 'none',
    },
    '& .fc-theme-standard td, .fc-theme-standard th': {
      border: `1px solid ${Colors.black}`,
      height: 28,
    },
    '& div.fc-timegrid-slot-label-frame': {
      fontSize: 10,
      fontWeight: 'normal',
      color: Colors.brownishGrey,
    },
    '& .fc-timegrid-cols .fc-day-today': {
      backgroundColor: 'rgb(24, 24, 24)',
    },
    '& .fc-col-header-cell.fc-day.fc-day-mon.fc-day-today': {
      backgroundColor: 'rgb(24, 24, 24)',
    },
    '& .fc-timegrid-col-frame .fc-timegrid-now-indicator-container': {
      overflow: 'visible',
    },
    '& .fc .fc-timegrid-now-indicator-arrow': {
      border: 'none',
    },
    '& .fc-timegrid-now-indicator-line': {
      display: 'none',
    },
    '& .fc .fc-col-header-cell-cushion': {
      display: 'flex',
    },
    '& .fc-event-time': {
      display: 'none',
    },
    '& .fc-timegrid-event-harness.fc-timegrid-event-harness-inset': {
      left: '0!important',
      right: '0!important',
      height: 28,
    },
  },
  timeNowIndicator: {
    backgroundColor: Colors.niceBlue,
    opacity: 0.72,
    fontSize: 10,
    lineHeight: 1.2,
    fontWeight: 500,
    color: Colors.veryLightPink,
    padding: '0 2px 0',
    transform: 'translate(-50%, 0)',
    position: 'absolute',
    left: '18px',
    top: '0px',
    width: '30px',
  },
  timeNowLine: {
    height: 1,
    display: 'block',
    width: '100vw',
    border: `1px dashed ${Colors.twilightBlue}`,
    marginLeft: '32px',
    marginTop: '5px',
  },
  headerCellWrapper: {
    color: Colors.brownGrey,
    marginLeft: 8,
    marginTop: 2,
  },
  date: {
    fontWeight: 600,
    fontSize: 24,
    opacity: .7,
  },
  weekDay: {
    opacity: .7,
    marginLeft: 2,
    fontWeight: 400,
    fontSize: 10,
  },
  eventStyle: {
    width: '100%',
    alignSelf: 'flex-start',
    height: 27,
    backgroundColor: 'rgba(255, 255, 255, 0.12)',
    border: 'none',
    borderLeft: `4px solid ${Colors.greenBlue}`,
    boxShadow: '0 0 1px 0 rgba(0, 0, 0, 0.5)!important',
  },
  eventWrapper: {
    display: 'flex',
  },
  iconWrapper: {
    width: 27,
    height: 27,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 0,
    margin: 0,
    backgroundColor: 'rgba(255, 255, 255, 0.06)',
    marginRight: 5,
  },
  icon: {
    width: 20,
    height: 20,
  },
  title: {
    margin: 0,
    color: Colors.veryLightPink,
    fontWeight: 400,
  },
  role: {
    margin: 0,
    textTransform: 'uppercase',
    color: Colors.brownGrey,
  },
});

export default useStyles;
