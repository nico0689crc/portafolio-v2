import { useRoutes } from 'react-router-dom';
import { MainRoutes, MainRoutesNavigate} from './MainRoutes'

const ThemeRoutes = () => {
  return useRoutes([MainRoutes, MainRoutesNavigate]);
}

export default ThemeRoutes;