import React from 'react';
import { shallow, mount } from 'enzyme';
import { Item } from '../index';

const defaultItems = {
  id: 3,
  content: 'Test task',

};

  const onDelete = f => f;
  const onComplete = f => f;
  const onInComplete = f => f;

describe('Item', () => {

  it('renders without crashing', () => {
    shallow(<Item item = {defaultItems} onComplete={onComplete} onInComplete={onInComplete} onDelete={onDelete} />)
  });

  it('should call onDelete with the ID of the task', () => {
    const onDeleteMock = jest.fn();
    const renderedItem = mount(
      <Item  item={defaultItems} onDelete={onDeleteMock} onComplete={onComplete} onInComplete={onInComplete} />
    );
    renderedItem.find('.itemDelete-button').simulate('click');
    expect(onDeleteMock.mock.calls.length).toBe(1);
    expect(onDeleteMock).toBeCalledWith(defaultItems.id);
  });

  it('should call onComplete with the ID of the task', () => {
    const completeMock = jest.fn();
    const renderedItem = mount(
      <Item item={defaultItems}  onComplete={completeMock} onDelete={onDelete} onInComplete={onInComplete} />
    );
    renderedItem.find('.itemComplete').simulate('click');
    expect(completeMock.mock.calls.length).toBe(1);
    expect(completeMock).toBeCalledWith(defaultItems.id);

  });

  it('should call onInComplete with the ID of the task', () => {
    const onInCompleteMock = jest.fn();
    const renderedItem = mount(
      <Item item={defaultItems} onInComplete={onInCompleteMock} onComplete={onComplete} onDelete={onDelete} />
    );
    renderedItem.find('.itemIncomplete').simulate('click');
    expect(onInCompleteMock.mock.calls.length).toBe(1);
    expect(onInCompleteMock).toBeCalledWith(defaultItems.id);
  });

});