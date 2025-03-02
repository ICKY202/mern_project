import { Button, Table } from "antd";
import MovieForm from "./MovieForm";
import { showLoading, hideLoading } from "../../redux/loaderSlice";
import {useEffect, useState} from 'react';
import { getMovies } from "../../api/movies";
import { useDispatch } from "react-redux";
import moment from 'moment';
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import DeleteMovieModal from "./DeleteMovieModal";

function MovieList() {
     const fakeMovies = [
        {
            key: "1",
            poster: "Image1",
            description: "Wolverine Vs Deadpool",
            duration: 120,
            genre: "Action",
            language: "English",
            releaseDate: "2024-08-01",
            name: "Wolverine Vs Deadpool",
        },
        {
            key: "2",
            poster: "Image2",
            description: "Wolverine Vs Deadpool",
            duration: 120,
            genre: "Action",
            language: "English",
            releaseDate: "2024-08-01",
            name: "Wolverine Vs Deadpool 2",
        },
    ];
    const tableHeadings = [
            {
                title: "Poster",
                dataIndex: "poster",
                render : (text, data) => {
                    return (<img width="75" height="115" style={{ objectFit: "cover"}} src={data.poster} alt="moive-poster"/>);
                },
            },
            {
                title: "Movie Name",
                dataIndex: "movieName",
            },
            {
                title: "Description",
                dataIndex: "description",
            },
            {
                title: "Duration",
                dataIndex: "duration",
                render: (text) => {
                    return `${text} mins`;
                }
            },
            {
                title: "Genre",
                dataIndex: "genre",
            },
            {
                title: "Language",
                dataIndex: "language",
            },
            {
                title: "Release Date",
                dataIndex: "releaseDate",
                releaseDate: (text, data) => {
                    return moment(data.releaseDate).format("DD-MM-YYYY");
                }
            },
            {
                title: "Action",
                render: (text, data) => {
                    return (
                        <div>
                            <Button onClick={() => {
                                setIsModalOpen(true);
                                setFormType("edit");
                                setSelectedMovie(data);
                            }}>
                                <EditOutlined/>
                            </Button>
                            <Button onClick={() => {
                                setIsDeleteModalOpen(true);
                                setSelectedMovie(data);
                            }}>
                                <DeleteOutlined/>
                            </Button>
                        </div>
                    );
                }
            },
    ];
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [selectedMovie, setSelectedMovie] = useState(null);
    const [movies, setMovies] = useState([]);
    const [formType, setFormType] = useState("add");
    const dispatch = useDispatch();
    console.log(movies);
    const getData = async () => {
        console.log("Getting data");
        dispatch(showLoading());
        try {
            console.log("Hello");
            const data = await getMovies();
            console.log(data);
            setMovies(data.map((movie) => {
                return {...movie, key: movie._id};
            }));
            dispatch(hideLoading());
        }catch(err) {
            dispatch(hideLoading());
        }
    };
    useEffect(() => {   
     getData();
    }, []);
   
    return (
        <>
            <div className="d-flex justify-content-end">
                <Button onClick={() => {
                    setIsModalOpen(true);
                    setFormType("add");
                }}>
                    Add Movie
                </Button>
            </div>
            <Table dataSource={movies} columns={tableHeadings}/>
            {isModalOpen && <MovieForm isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} selectedMovie={selectedMovie} setSelectedMovie={setSelectedMovie} formType={formType} getData={getData}/>}
            {isDeleteModalOpen && <DeleteMovieModal isDeleteModalOpen={isDeleteModalOpen} setIsDeleteModalOpen={setIsDeleteModalOpen} selectedMovie={selectedMovie} setSelectedMovie={setSelectedMovie} getData={getData}/>}    
        </>
    )
}

export default MovieList
