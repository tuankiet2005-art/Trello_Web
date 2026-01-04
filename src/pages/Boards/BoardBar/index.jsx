import Box from '@mui/material/Box'
import Chip from '@mui/material/Chip'
import DashboardIcon from '@mui/icons-material/Dashboard'
import VpnLockIcon from '@mui/icons-material/VpnLock'
import AddToDriveIcon from '@mui/icons-material/AddToDrive'
import BoltIcon from '@mui/icons-material/Bolt'
import FilterListIcon from '@mui/icons-material/FilterList'
import Avatar from '@mui/material/Avatar'
import AvatarGroup from '@mui/material/AvatarGroup'
import { Tooltip } from '@mui/material'
import Button from '@mui/material/Button'
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1'

const MENU_STYLE ={
  color: 'primary.main',
  backgroundColor: 'white',
  border: 'none',
  paddingX: '5px',
  borderRadius: '4px',
  '& .MuiSvgIcon-root': {
    color: 'primary.main'
  },
  '&:hover': {
    backgroundColor: 'primary.50'
  }
}

function BoardBar() {
  return (
    <Box
      sx={{
        width: '100%',
        height: (theme) => theme.trello.boardBarHeight,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 2,
        paddingX: 2,
        overflowX: 'auto',
        borderTop: '1px solid #00bfa5'
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
        <Chip
          sx={MENU_STYLE}
          icon={<DashboardIcon />}
          label="Kayd"
          // clickable
          onClick ={() => {}}
        />

        <Chip
          sx={MENU_STYLE}
          icon={<VpnLockIcon />}
          label="Public/Private Workspace"
          // clickable
          onClick ={() => {}}
        />

        <Chip
          sx={MENU_STYLE}
          icon={<AddToDriveIcon />}
          label="Add To Google Drive"
          // clickable
          onClick ={() => {}}
        />

        <Chip
          sx={MENU_STYLE}
          icon={<BoltIcon />}
          label="Automation"
          // clickable
          onClick ={() => {}}
        />

        <Chip
          sx={MENU_STYLE}
          icon={<FilterListIcon />}
          label="Filters"
          // clickable
          onClick ={() => {}}
        />
      </Box>

      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
        <Button variant="outlined" startIcon={<PersonAddAlt1Icon/>}>Invite</Button>
        <AvatarGroup
          max={7}
          sx={{
            '& .MuiAvatar-root':{
              width: 34,
              height: 34,
              fontSize: 16
            }
          }}
        >
          <Tooltip title="Avatar">
            <Avatar
              alt="Remy Sharp"
              src="https://avatars.githubusercontent.com/u/184260111?v=4" />
          </Tooltip>
          <Tooltip title="Avatar">
            <Avatar
              alt="Remy Sharp"
              src="https://avatars.githubusercontent.com/u/184260111?v=4" />
          </Tooltip>
          <Tooltip title="Avatar">
            <Avatar
              alt="Remy Sharp"
              src="https://avatars.githubusercontent.com/u/184260111?v=4" />
          </Tooltip>
          <Tooltip title="Avatar">
            <Avatar
              alt="Remy Sharp"
              src="https://avatars.githubusercontent.com/u/184260111?v=4" />
          </Tooltip>
          <Tooltip title="Avatar">
            <Avatar
              alt="Remy Sharp"
              src="https://avatars.githubusercontent.com/u/184260111?v=4" />
          </Tooltip>
          <Tooltip title="Avatar">
            <Avatar
              alt="Remy Sharp"
              src="https://avatars.githubusercontent.com/u/184260111?v=4" />
          </Tooltip>
          <Tooltip title="Avatar">
            <Avatar
              alt="Remy Sharp"
              src="https://avatars.githubusercontent.com/u/184260111?v=4" />
          </Tooltip>
          <Tooltip title="Avatar">
            <Avatar
              alt="Remy Sharp"
              src="https://avatars.githubusercontent.com/u/184260111?v=4" />
          </Tooltip>
        </AvatarGroup>
      </Box>
    </Box>
  )
}

export default BoardBar
