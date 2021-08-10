import dashboard from "./icons/dashboard.svg";
import calendar from "./icons/calender.svg";
import people from "./icons/people.svg";
import mail from "./icons/mail.svg";
import reports from "./icons/reports.svg";
import settings from "./icons/settings.svg";
import addIcon from "./icons/add.svg";
import taskIcon from "./icons/task.svg";
import filtersIcon from "./icons/filters.svg";
import nextDateIcon from "./icons/next-date.svg";
import calendarIcon from "./icons/calender.svg";
import listIcon from "./icons/adjust.svg";
import settingsIcon from "./icons/settings.svg";
import theme from "./icons/theme.svg";
import task from "./icons/task.svg";
import notification from "./icons/notification.svg";
import profileIcon from "./icons/profile.svg";
import { Colors } from "../theme";
import creditCard from "./icons/credit-card.svg";
import doctor from "./icons/doctor.svg";
import checkboxFilled from "./icons/checkbox-filled.svg";

export const sidebarButton = [
	{ icon: dashboard, alt: "dashboard icon" },
	{ icon: calendar, alt: "calendar icon", active: true },
	{ icon: people, alt: "people icon" },
	{ icon: mail, alt: "mail icon" },
	{ icon: reports, alt: "reports icon" },
	{ icon: settings, alt: "settings icon" },
];

export const leftSideButtons = [
	{ icon: addIcon, alt: "add icon", name: "New", active: true },
	{ icon: taskIcon, alt: "task icon", name: "Waitlist" },
	{ icon: filtersIcon, alt: "filters icon", name: "Filters" },
	{ icon: nextDateIcon, alt: "next date icon", name: "Today" },
	{ icon: calendarIcon, alt: "calendar icon", name: "08 Mar 2020" },
];
export const rightSideButtons = [
	{ icon: listIcon, alt: "list icon", name: "List" },
	{ icon: settingsIcon, alt: "settings icon", name: "More Options" },
];

export const profileButton = [
	{ icon: theme, alt: "clock icon" },
	{ icon: task, alt: "task icon" },
	{ icon: notification, alt: "notification icon" },
	{ icon: profileIcon, alt: "profileIcon icon" },
];

export const events = [
	{
		id: '1',
		title: 'Ashley Simons',
		start: '2021-08-09T11:00:00',
		borderColor: Colors.dullOrange,
		extendedProps: {
			role: 'Cardiac surgery',
			img: creditCard,
		},
	},
	{
		id: '2',
		title: 'Andrew Peterts Veelo',
		start: '2021-08-09T11:15:00',
		extendedProps: {
			role: 'Cardiac surgery',
			img: doctor,
		},
	},
	{
		id: '3',
		title: 'Ashley Booravoola',
		start: '2021-08-09T11:30:00',
		extendedProps: {
			role: 'Cardiac surgery',
			img: checkboxFilled,
		},
	},
	{
		id: '4',
		title: 'Peter Meyers',
		start: '2021-08-09T11:45:00',
		borderColor: Colors.reddish,
		extendedProps: {
			role: 'Cardiac surgery',
			img: calendar,
		},
	},
	{
		id: '5',
		title: 'Ashley Booravoola',
		start: '2021-08-09T12:15:00',
		extendedProps: {
			role: 'Cardiac surgery',
			img: checkboxFilled,
		},
	},
	{
		id: '6',
		title: 'Peter Meyers',
		start: '2021-08-09T13:15:00',
		borderColor: Colors.reddish,
		extendedProps: {
			role: 'Cardiac surgery',
			img: calendar,
		},
	},
	{
		id: '7',
		title: 'Andrew Peters Veelo',
		start: '2021-08-10T11:30:00',
		extendedProps: {
			role: 'Cardiac surgery',
			img: doctor,
		},
	},
	{
		id: '8',
		title: 'Ashley Booravoola',
		start: '2021-08-10T11:45:00',
		extendedProps: {
			role: 'Cardiac surgery',
			img: checkboxFilled,
		},
	},
];
