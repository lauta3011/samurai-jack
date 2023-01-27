import {render, waitFor, renderHook } from '@testing-library/react'
import { MockedApp, useQueryComments, Wrapper } from '../../../utils/testing';
import CommentList from './index';

const component = (
    <Wrapper>
        <MockedApp>
            <CommentList />
        </MockedApp>
    </Wrapper>
    );

describe('CommentList', () => {
    beforeAll(async () => {
        const { result, rerender } = renderHook(() => useQueryComments(), { wrapper: Wrapper });
        await waitFor(() => expect(result.current.data).toBeDefined());
    });
    
    it('load component', async () => {
        const { getByTestId } = render(component);
        expect(await waitFor(() => getByTestId('comment-list'))).toBeInTheDocument;
    });

    it('displays data', async () => {
        const { getAllByTestId } = render(component);
        const count = await waitFor(() => getAllByTestId('single-comment').length);
        expect(count).toBe(3);
    });
})