import {render, fireEvent, waitFor } from '@testing-library/react';
import { renderHook } from '@testing-library/react-hooks';

import { MockedApp, Wrapper, mockData } from '../../../utils/testing';

import { useQuery } from 'react-query';
import CommentDetail from './index';
import { act } from 'react-dom/test-utils';

const component = (
    <Wrapper>
        <MockedApp>
            <CommentDetail />
        </MockedApp>
    </Wrapper>
    );

function useQuerySingleComment() {
    return useQuery({ queryKey: ['comment', 1], queryFn: async () => jest.fn().mockImplementation(() => { return mockData[0] }) });
}
    
describe('CommentDetail', () => {
    it('loads data', async () => {
        render(component);

        const { result, waitFor } = renderHook(() => useQuerySingleComment(), { wrapper: Wrapper });
    
        await waitFor(() => expect(result.current.data).toBeDefined());

        expect(result.current.data).toEqual(mockData[0]);
    });

    it('back button is working', async () => {
        const { findByTestId } = render(component);
        
        const { result } = renderHook(() => useQuerySingleComment(), { wrapper: Wrapper });
        
        expect(result.current.data).toEqual(mockData[0]);
        
        const button = findByTestId('back-button');

        expect(button).toBeInTheDocument;
    });
});