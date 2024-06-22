import { useGetUsersQuery } from "../services/services"

const Home = () => {
    const { data: users, isError, isLoading, error, refetch } = useGetUsersQuery();
    return (
        <div>

        </div>
    )
}

export default Home
