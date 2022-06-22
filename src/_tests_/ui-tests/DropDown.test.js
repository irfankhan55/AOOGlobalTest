import * as React from 'react';
import renderer from 'react-test-renderer'
import { Dropdown } from '../../components/molecules'

it('DropDown Should render', async() => {
    const mockCountries = [{ name: 'English (UK)', value: 'en' }, // TODO: Read from json file
    { name: 'English (UK)', value: 'en' },
    { name: 'French ', value: 'fr' },
    { name: 'Danish ', value: 'da' }]
   renderer.create(<Dropdown data={mockCountries}/>).toJSON()
    
})