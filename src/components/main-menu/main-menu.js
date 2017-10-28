import React from 'react';
import { ListItem, ListItemText } from 'material-ui/List';
import { Link } from 'react-router-dom';
export const mailFolderListItems = (
  <div>
    <ListItem button>
      <ListItemText primary="Books" />
    </ListItem>
    <ListItem button>
      <ListItemText primary="Movies" />
    </ListItem>
    <ListItem button>
      <ListItemText primary="Songs" />
    </ListItem>
    <ListItem button>
      <ListItemText primary="Bands" />
    </ListItem>
    <ListItem button>
      <ListItemText primary="Albums" />
    </ListItem>
    <ListItem button>
      <ListItemText primary="Paintings" />
    </ListItem>
  </div>
);

export const otherMailFolderListItems = (
  <div>
    <Link to="/article">
      <ListItem button>Article</ListItem>
    </Link>
    <Link to="/list">
      <ListItem button>List</ListItem>
    </Link>
    <Link to="/grid-list">
      <ListItem button>Grid List</ListItem>
    </Link>
  </div>
);