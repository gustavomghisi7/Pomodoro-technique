import styles from '../styles/components/Profile.module.css';

export function Profile () {
    return (
        <div className = {styles.profileContainer}>
            <img src = "http://www.santaluziamolduras.com.br/assets/frontend/img/colaboradores/gustavo-martins-ghisi.png"
                alt = "Gustavo Martins Ghisi"/>
                <div>
                    <strong>Gustavo Martins Ghisi</strong>
                    <p>
                        <img src = "icons/level.svg" alt = "Level"/>
                        Level 1
                    </p>
                </div>
        </div>
    );
}