import ShuffleIcon from '@material-ui/icons/Shuffle'
import LibraryAddIcon from '@material-ui/icons/LibraryAdd'
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary'
import RepeatIcon from '@material-ui/icons/Repeat'
import AlbumIcon from '@material-ui/icons/Album'

export default {
  all: {
    icon: AlbumIcon,
    params: 'sort=name&order=ASC',
  },
  random: { icon: ShuffleIcon, params: 'sort=random' },
  recentlyAdded: {
    icon: LibraryAddIcon,
    params: 'sort=created_at&order=DESC',
  },
  recentlyPlayed: {
    icon: VideoLibraryIcon,
    params: 'sort=play_date&order=DESC&filter={"recently_played":true}',
  },
  mostPlayed: {
    icon: RepeatIcon,
    params: 'sort=play_count&order=DESC&filter={"recently_played":true}',
  },
}
