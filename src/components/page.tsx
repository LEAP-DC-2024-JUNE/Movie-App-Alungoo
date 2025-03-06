// import { fetchMovies } from "@/utils/data-fetching"
// import MovieContainer from "@/components/MovieContainer"
// import PaginationControls from "@/components/MoviePagination"

// export function generateStaticParams() {
//   const movieTypes = ["popular", "top_rated", "upcoming"]
//   return movieTypes.map((type) => ({ type }))
// }

// export default async function MovieTypePage(props:any) {
//   const { type } = props.params
//   const page = props.searchParams?.page ? Number(props.searchParams.page) : 1

//   try {
//     const data = await fetchMovies(`/movie/${type}`, `language=en-US&page=${page}`)
//     const totalPages = Math.min(data.total_pages, 5)

//     let title = "Popular"
//     if (type === "top_rated") title = "Top Rated"
//     if (type === "upcoming") title = "Upcoming"

//     return (
//       <div className="">

//         <MovieContainer  title={title} movies={data.results} type={type} hideSeeMore={true}  />
//         <div className="mt-8">
//           <PaginationControls currentPage={page} totalPages={totalPages} baseUrl={`/movies/${type}`} />
//         </div>
//       </div>
//     )
//   } catch (error) {
//     console.error("Error fetching movies:", error)
//     return <div>Error loading movies. Please try again later.</div>
//   }
// }
