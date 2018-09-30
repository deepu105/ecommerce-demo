import React from 'react';
import { DropdownItem } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink as Link } from 'react-router-dom';
import { NavDropdown } from '../header-components';
import { Translate, translate } from 'react-jhipster';

const adminMenuItems = (
  <>
    <DropdownItem tag={Link} to="/admin/gateway">
      <FontAwesomeIcon icon="road" /> <Translate contentKey="global.menu.admin.gateway">Gateway</Translate>
    </DropdownItem>
    <DropdownItem tag={Link} to="/admin/user-management">
      <FontAwesomeIcon icon="user" /> <Translate contentKey="global.menu.admin.userManagement">User management</Translate>
    </DropdownItem>
    <DropdownItem tag={Link} to="/admin/metrics">
      <FontAwesomeIcon icon="tachometer-alt" /> <Translate contentKey="global.menu.admin.metrics">Metrics</Translate>
    </DropdownItem>
    <DropdownItem tag={Link} to="/admin/health">
      <FontAwesomeIcon icon="heart" /> <Translate contentKey="global.menu.admin.health">Health</Translate>
    </DropdownItem>
    <DropdownItem tag={Link} to="/admin/configuration">
      <FontAwesomeIcon icon="list" /> <Translate contentKey="global.menu.admin.configuration">Configuration</Translate>
    </DropdownItem>
    <DropdownItem tag={Link} to="/admin/audits">
      <FontAwesomeIcon icon="bell" /> <Translate contentKey="global.menu.admin.audits">Audits</Translate>
    </DropdownItem>
    {/* jhipster-needle-add-element-to-admin-menu - JHipster will add entities to the admin menu here */}
    <DropdownItem tag={Link} to="/admin/logs">
      <FontAwesomeIcon icon="tasks" /> <Translate contentKey="global.menu.admin.logs">Logs</Translate>
    </DropdownItem>
  </>
);

const swaggerItem = (
  <DropdownItem tag={Link} to="/admin/docs">
    <FontAwesomeIcon icon="book" /> <Translate contentKey="global.menu.admin.apidocs">API</Translate>
  </DropdownItem>
);

const databaseItem = (
  <DropdownItem tag="a" href="./h2-console" target="_tab">
    <FontAwesomeIcon icon="hdd" /> <Translate contentKey="global.menu.admin.database">Database</Translate>
  </DropdownItem>
);

export const AdminMenu = ({ showSwagger, showDatabase }) => (
  <NavDropdown icon="user-plus" name={translate('global.menu.admin.main')} style={{ width: '140%' }} id="admin-menu">
    {adminMenuItems}
    {showSwagger && swaggerItem}

    {showDatabase && databaseItem}
  </NavDropdown>
);

export default AdminMenu;
