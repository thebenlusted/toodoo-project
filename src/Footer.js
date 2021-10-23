import React from 'react';

export class Footer extends React.Component {
    render() {
        return(
            <div id="footer" className="animate__animated animate__fadeInUp">
                <h1>Created By Ben Lusted</h1>
                <ul id="social-links">
                    <li id="tw-icon"><a href="https://twitter.com/thebenlusted" target="_top"><i class="fab fa-twitter"></i></a></li>
                    <li id="gh-icon"><a href="https://github.com/thebenlusted" target="_top"><i class="fab fa-github-alt"></i></a></li>
                    <li id="gl-icon"><a href="#" target="_top"><i class="fas fa-globe"></i></a></li>
                </ul>
            </div>
        )
    }
}