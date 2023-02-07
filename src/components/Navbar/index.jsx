import styles from './Navbar.module.scss';
import classNames from 'classnames';

import { RiShoppingCart2Line, RiShoppingCartFill } from 'react-icons/ri';
import { ReactComponent as Logo } from '../../assets/logo.svg';

const iconProps = {
  color: 'white',
  size: 24
}

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <Logo className={styles.logo} />
      <div className={styles.links}>
        <div>
          {/* [representa a hash que o css module gera]: */}
          <a href="/" className={classNames(styles.link, {
            [styles.selected]: window.location.pathname === '/'
          })}>Página inicial</a>
        </div>
      </div>
      <div className={styles.busca}>

      </div>
      <div className={styles.icones}>
        <a href="/carrinho">
          { window.location.pathname === '/carrinho'
            ? <RiShoppingCartFill {...iconProps} />
            : <RiShoppingCart2Line {...iconProps  }/>
          }
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
