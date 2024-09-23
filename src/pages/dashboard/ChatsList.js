import React from 'react'
import { Box, Divider, IconButton, Stack, Typography } from '@mui/material'
import { Circle, Users, MagnifyingGlass } from 'phosphor-react'
import { Search, SearchIconWrapper, StyledInputBase } from '../../components/Search'
import { useTheme } from '@mui/material/styles'
import { SimpleBarStyle } from '../../components/Scrollbar'
import ChatElement from '../../components/ChatElement'
import { ChatList } from '../../data'

const Chats = () => {
  const theme = useTheme()

  return (
    <>
      <Box
        sx={{
          position: 'relative',
          height: '100%',
          width: 320,
          bgcolor: theme.palette.mode === 'light' ? '#F8FAFF' : theme.palette.background.paper,
          boxShadow: '0px 0px 2px rgba(0, 0, 0, 0.25)'
        }}
      >
        <Stack p={3} spacing={2} sx={{ maxHeight: '100vh' }}>
          <Stack sx={{ alignItems: 'center', justifyContent: 'space-between' }} direction='row'>
            <Typography variant='h4'>Chats</Typography>
            <Stack direction='row' sx={{ alignItems: 'center' }} spacing={1}>
              <IconButton sx={{ width: 'auto' }}>
                <Users />
              </IconButton>
              <IconButton sx={{ width: 'auto' }}>
                <Circle />
              </IconButton>
            </Stack>
          </Stack>
          <Stack sx={{ width: '100%' }}>
            <Search>
              <SearchIconWrapper>
                <MagnifyingGlass color={theme.palette.primary.main} />
              </SearchIconWrapper>
              <StyledInputBase placeholder='Search...' inputProps={{ 'aria-label': 'search' }} />
            </Search>
          </Stack>
          <Divider />
          <Stack sx={{ flexGrow: 1, overflow: 'scroll', height: '100%' }}>
            <SimpleBarStyle timeout={500} clickOnTrack={false}>
              <Stack spacing={2.4}>
                <Typography variant='subtitle2' sx={{ color: '#676667' }}>
                  Pinned
                </Typography>
                {/* <ChatElement /> */}
                {ChatList.filter((ele) => ele.pinned).map((ele) => {
                  return <ChatElement {...ele} />
                })}
                <Typography variant='subtitle2' sx={{ color: '#676667' }}>
                  All Chats
                </Typography>
                {/* <ChatElement /> */}
                {ChatList.filter((ele) => !ele.pinned).map((ele) => {
                  return <ChatElement {...ele} />
                })}
              </Stack>
            </SimpleBarStyle>
          </Stack>
        </Stack>
      </Box>
    </>
  )
}

export default Chats
