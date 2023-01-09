export default interface TComment {
    postId: string,
    id: number,
    name: string,
    email: string,
    body: string,
    handleClick?: () => void
}