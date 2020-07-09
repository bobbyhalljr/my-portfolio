import React from 'react';

const Footer = () => {

    return (
        <footer class="footer">
            <div class="container">

                <svg class="navbar__logo" width="100" height="70" viewBox="0 0 97 69" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0)">
                        <path d="M3.96 35.0781C3.72 35.0781 3.516 35.0061 3.348 34.8621C3.204 34.6941 3.132 34.4901 3.132 34.2501V10.7421C3.132 10.4781 3.204 10.2741 3.348 10.1301C3.516 9.96212 3.72 9.87812 3.96 9.87812H13.824C16.392 9.87812 18.324 10.4901 19.62 11.7141C20.916 12.9381 21.564 14.5461 21.564 16.5381C21.564 17.8821 21.252 18.9981 20.628 19.8861C20.028 20.7741 19.308 21.4221 18.468 21.8301C19.476 22.3341 20.328 23.1141 21.024 24.1701C21.72 25.2261 22.068 26.4381 22.068 27.8061C22.068 29.1501 21.756 30.3741 21.132 31.4781C20.532 32.5821 19.632 33.4581 18.432 34.1061C17.232 34.7541 15.792 35.0781 14.112 35.0781H3.96ZM13.284 20.5341C14.796 20.5341 15.948 20.1861 16.74 19.4901C17.556 18.7941 17.964 17.8221 17.964 16.5741C17.964 15.3501 17.568 14.4141 16.776 13.7661C15.984 13.1181 14.82 12.7941 13.284 12.7941H6.66V20.5341H13.284ZM13.644 32.1621C15.156 32.1621 16.332 31.7541 17.172 30.9381C18.036 30.1221 18.468 29.0781 18.468 27.8061C18.468 26.4861 18.036 25.4301 17.172 24.6381C16.332 23.8221 15.156 23.4141 13.644 23.4141H6.66V32.1621H13.644ZM28.0069 35.0781C27.7669 35.0781 27.5629 35.0061 27.3949 34.8621C27.2509 34.6941 27.1789 34.4901 27.1789 34.2501V10.7061C27.1789 10.4661 27.2509 10.2741 27.3949 10.1301C27.5629 9.96212 27.7669 9.87812 28.0069 9.87812H29.9149C30.1549 9.87812 30.3469 9.96212 30.4909 10.1301C30.6589 10.2741 30.7429 10.4661 30.7429 10.7061V31.9461H42.6949C42.9589 31.9461 43.1629 32.0301 43.3069 32.1981C43.4749 32.3421 43.5589 32.5461 43.5589 32.8101V34.2501C43.5589 34.4901 43.4749 34.6941 43.3069 34.8621C43.1389 35.0061 42.9349 35.0781 42.6949 35.0781H28.0069ZM48.292 35.0781C48.052 35.0781 47.848 35.0061 47.68 34.8621C47.536 34.6941 47.464 34.4901 47.464 34.2501V10.7421C47.464 10.4781 47.536 10.2741 47.68 10.1301C47.848 9.96212 48.052 9.87812 48.292 9.87812H50.128C50.392 9.87812 50.596 9.96212 50.74 10.1301C50.908 10.2741 50.992 10.4781 50.992 10.7421V20.6781H63.376V10.7421C63.376 10.4781 63.448 10.2741 63.592 10.1301C63.76 9.96212 63.964 9.87812 64.204 9.87812H66.04C66.304 9.87812 66.508 9.96212 66.652 10.1301C66.82 10.2741 66.904 10.4781 66.904 10.7421V34.2501C66.904 34.4901 66.82 34.6941 66.652 34.8621C66.484 35.0061 66.28 35.0781 66.04 35.0781H64.204C63.964 35.0781 63.76 35.0061 63.592 34.8621C63.448 34.6941 63.376 34.4901 63.376 34.2501V23.9181H50.992V34.2501C50.992 34.4901 50.908 34.6941 50.74 34.8621C50.572 35.0061 50.368 35.0781 50.128 35.0781H48.292Z"
                            fill="#444444" />
                        <path d="M75.58 27.848C74.572 27.848 73.816 27.62 73.312 27.164C72.808 26.684 72.556 26.024 72.556 25.184C72.556 24.344 72.88 23.648 73.528 23.096C74.2 22.52 75.028 22.232 76.012 22.232C76.9 22.232 77.62 22.448 78.172 22.88C78.724 23.312 79 23.924 79 24.716C79 25.676 78.688 26.444 78.064 27.02C77.44 27.572 76.612 27.848 75.58 27.848ZM82.06 39.044C82.372 39.044 82.612 39.2 82.78 39.512C82.972 39.8 83.068 40.172 83.068 40.628C83.068 41.18 82.984 41.612 82.816 41.924C82.648 42.236 82.384 42.512 82.024 42.752C80.344 43.856 78.1 45.38 75.292 47.324C74.356 52.316 73.144 56.24 71.656 59.096C70.168 61.952 68.272 63.38 65.968 63.38C64.72 63.38 63.724 62.996 62.98 62.228C62.212 61.484 61.828 60.5 61.828 59.276C61.828 57.572 62.488 55.748 63.808 53.804C65.128 51.884 67.612 49.508 71.26 46.676L71.512 44.84C71.848 42.536 72.112 40.268 72.304 38.036C72.448 36.74 72.676 34.808 72.988 32.24C73.084 31.544 73.348 31.04 73.78 30.728C74.212 30.392 74.872 30.224 75.76 30.224C76.48 30.224 76.948 30.332 77.164 30.548C77.404 30.764 77.524 31.064 77.524 31.448C77.524 32.552 77.128 35.6 76.336 40.592L75.976 43.076C77.896 41.636 79.648 40.388 81.232 39.332C81.544 39.14 81.82 39.044 82.06 39.044ZM66.364 59.888C66.988 59.888 67.672 59.18 68.416 57.764C69.16 56.348 69.856 54.068 70.504 50.924C68.68 52.484 67.372 53.888 66.58 55.136C65.764 56.408 65.356 57.524 65.356 58.484C65.356 59.42 65.692 59.888 66.364 59.888ZM95.0259 35.156C95.5539 35.156 95.9979 35.348 96.3579 35.732C96.7419 36.092 96.9339 36.548 96.9339 37.1C96.9339 37.412 96.8619 37.748 96.7179 38.108C96.3339 38.996 95.7939 39.74 95.0979 40.34C94.4019 40.94 93.6339 41.24 92.7939 41.24C92.1219 41.24 91.5459 41 91.0659 40.52C90.6099 40.04 90.3819 39.392 90.3819 38.576C90.3819 38.12 90.4059 37.628 90.4539 37.1C90.5019 36.716 90.5259 36.452 90.5259 36.308C90.5259 36.116 90.4779 35.972 90.3819 35.876C90.3099 35.78 90.2139 35.732 90.0939 35.732C89.7579 35.732 89.3019 36.14 88.7259 36.956C88.1499 37.748 87.5739 38.804 86.9979 40.124C86.4219 41.444 85.9539 42.836 85.5939 44.3C85.3299 45.452 85.0299 46.22 84.6939 46.604C84.3579 46.988 83.8059 47.18 83.0379 47.18C82.1259 47.18 81.4779 46.7 81.0939 45.74C80.7339 44.78 80.5539 43.244 80.5539 41.132C80.5539 38.012 80.9979 35.048 81.8859 32.24C82.1019 31.544 82.4499 31.04 82.9299 30.728C83.4339 30.392 84.1299 30.224 85.0179 30.224C85.4979 30.224 85.8339 30.284 86.0259 30.404C86.2179 30.524 86.3139 30.752 86.3139 31.088C86.3139 31.472 86.1339 32.336 85.7739 33.68C85.5339 34.64 85.3419 35.48 85.1979 36.2C85.0539 36.92 84.9339 37.808 84.8379 38.864C85.6299 36.8 86.5179 35.12 87.5019 33.824C88.4859 32.528 89.4459 31.604 90.3819 31.052C91.3179 30.5 92.1699 30.224 92.9379 30.224C93.6339 30.224 94.1619 30.428 94.5219 30.836C94.9059 31.22 95.0979 31.796 95.0979 32.564C95.0979 33.02 94.9659 33.884 94.7019 35.156H95.0259Z"
                            fill="#444444" />
                    </g>
                </svg>

                <div class="paragraph">
                    <p class="paragraph__p--dark">
                        If you have any questions please feel free to
                        <a href={`mailto: bobbyhalljrcs@gmail.com`}> Email Me.</a>
                    </p>
                </div>

                <div class="social-links">
                    <a href='https://www.linkedin.com/in/bobby-hall-jr-339091143/'><i class=" social-links__linkedin fab fa-linkedin-in fa-gradient"></i></a>
                    <a href='https://github.com/bobbyhalljr'><i class=" social-links__github fab fa-github-alt fa-gradient"></i></a>
                </div>

                <div class="footer-text">
                    <div class="footer-text__small">
                        Made with hard work and <span style={{ paddingRight: '0.5rem' }}>❤️</span> by Bobby Leon Hall Jr  <br /> &copy; 2017 - 2020
                    </div>
                </div>

            </div>
        </footer>
    )
}

export default Footer;