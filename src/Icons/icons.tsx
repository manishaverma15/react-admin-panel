import React from 'react';
import MailIcon from '@material-ui/icons/Mail';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { StarRate, Send, Drafts, Delete } from '@material-ui/icons';
import { Dashboard } from '@material-ui/icons';
import TableViewIcon from '@mui/icons-material/TableView';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';

const folderListItems = [
  { icon: <Dashboard />, text: 'DashBoard' },
  { icon: <TableViewIcon />, text: 'Tables' },
  { icon: <Send />, text: 'Send Mail' },
  { icon: <Drafts />, text: 'Drafts' },
  { icon: <MailIcon />, text: 'Mail' },
];

const otherFolderListItems = [
  { icon: <InboxIcon />, text: 'Inbox' },
  { icon: <StarRate />, text: 'Starred' },
  { icon: <ReceiptLongIcon />, text: 'Billing' },
  { icon: <MailIcon />, text: 'Spam' },
];

export const mailFolderListItems = folderListItems.map((item, index) => (
  <ListItem button key={index}>
    <ListItemIcon>{item.icon}</ListItemIcon>
    <ListItemText primary={item.text} />
  </ListItem>
));

export const otherMailFolderListItems = otherFolderListItems.map((item, index) => (
  <ListItem button key={index}>
    <ListItemIcon>{item.icon}</ListItemIcon>
    <ListItemText primary={item.text} />
  </ListItem>
));
