import React from 'react';
import { shallow, mount } from 'enzyme';
import { ItemsList } from '../index';
import { Item }  from '../Item/index';

const defaultProps = {
  items: [],
};

const onDelete = f => f;
const onComplete = f => f;
const onInComplete = f => f;

describe('ItemsList', () => {
  it('renders without crashing', () => {
    shallow(<ItemsList {...defaultProps} />);
  });

  it('should display warning message if no items', () => {
    const renderedItem = shallow(<ItemsList {...defaultProps} items={[]} />);
    expect(renderedItem.find('#items-missing')).toHaveLength(1);
  });

  it('should not display warning message if items are present', () => {
    const items = [{ id: 1, content: 'Test 1' }];
    const renderedItem = shallow(<ItemsList {...defaultProps} items={items} />);
    expect(renderedItem.find('#items-missing')).toHaveLength(0);
  });

  it('should render items as list items', () => {
    const items = { id: 1, content: 'Test 1' };
    const renderedItem = shallow(<Item item={items} onComplete={onComplete} onInComplete={onInComplete} onDelete={onDelete}/>);
    expect(renderedItem.find('li')).toHaveLength(1);
  });

  it('should call handleFilterClick method with ALL when ALL Tasks clicked', () => {
    const renderedItem = mount(<ItemsList {...defaultProps} items={[]}/>);
    const handleFilterClickMock = renderedItem.instance().handleFilterClick = jest.fn();
    renderedItem.find('.show-all').simulate('click');
    expect(handleFilterClickMock).toHaveBeenCalledWith('ALL');
  });

  it('should call handleFilterClick method with COMPLETED when Completed clicked', () => {
    const renderedItem = mount(<ItemsList {...defaultProps} items={[]} />);
    const handleFilterClickMock = renderedItem.instance().handleFilterClick = jest.fn();
    renderedItem.find('.completed').simulate('click');
    expect(handleFilterClickMock).toHaveBeenCalledWith('COMPLETED');
  });

  it('should call handleFilterClick method with INCOMPLETE when Incomplete clicked', () => {
    const renderedItem = mount(<ItemsList {...defaultProps} items={[]} />);
    const handleFilterClickMock = renderedItem.instance().handleFilterClick = jest.fn();
    renderedItem.find('.incomplete').simulate('click');
    expect(handleFilterClickMock).toHaveBeenCalledWith('INCOMPLETE');
  });

});
