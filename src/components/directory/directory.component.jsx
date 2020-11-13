import React from 'react';

import SECTION_DATA from './data.json'

import MenuItem from '../menu-item/menu-item.component';

import './directory.styles.sass';

class Directory extends React.Component {
    constructor() {
        super();

        this.state = {
            section: SECTION_DATA
        };
    }

    render() {
        return (
            <div className='directory-menu'>
                {this.state.section.map(({ id, ...otherSectionProps }) =>( 
                    <MenuItem key={id} {...otherSectionProps} />
                ))}
            </div>
        );
    }
}

export default Directory;