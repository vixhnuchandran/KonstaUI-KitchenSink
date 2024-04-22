import React from 'react';
import { Page, Navbar, NavbarBackLink, List, ListButton } from 'konsta/react';

export default function ListButtonPage() {
  return (
    <Page>
      <Navbar
        title="List Button"
        left={<NavbarBackLink onClick={() => history.back()} />}
      />

      <List strong outlineIos>
        <ListButton>Button 1</ListButton>
        <ListButton>Button 2</ListButton>
        <ListButton>Button 3</ListButton>
      </List>

      <List inset strong>
        <ListButton>Button 1</ListButton>
        <ListButton>Button 2</ListButton>
        <ListButton>Button 3</ListButton>
      </List>
      <List inset strong>
        <ListButton className="k-color-brand-red">Red Button</ListButton>
      </List>
    </Page>
  );
}
ListButtonPage.displayName = 'ListButtonPage';
