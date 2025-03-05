import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMovieDetailsModal } from "../utils/moviesSlice";

export default function MovieDetailsModal() {
  const dispatch = useDispatch();
  const { movieDetailsModal, selectedMovie } = useSelector(
    (store) => store.movies
  );

  if (!selectedMovie) return null;

  return (
    <Dialog
      open={movieDetailsModal}
      onClose={() => dispatch(toggleMovieDetailsModal())}
      className="relative z-50"
    >
      <div className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm transition-opacity"></div>
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <DialogPanel className="relative w-full max-w-lg overflow-hidden rounded-lg bg-white shadow-md transition-all">
          <div className="px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <DialogTitle className="text-lg font-semibold text-gray-900">
              {selectedMovie.title}
            </DialogTitle>
            <div className="mt-2">
              <img
                className="w-full h-64 object-contain rounded-lg"
                src={`https://image.tmdb.org/t/p/w500${selectedMovie.poster_path}`}
                alt={selectedMovie.title}
              />
              <p className="text-sm text-gray-500 mt-3">
                {selectedMovie.overview}
              </p>
              <p className="text-sm mt-2">
                <strong>Release Date:</strong> {selectedMovie.release_date}
              </p>
              <p className="text-sm">
                <strong>Rating:</strong> {selectedMovie.vote_average} ⭐ (
                {selectedMovie.vote_count} votes)
              </p>
            </div>
          </div>

          {/* Modal Footer */}
          <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
            <button
              type="button"
              onClick={() => dispatch(toggleMovieDetailsModal())}
              className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
            >
              Close
            </button>
          </div>
        </DialogPanel>
      </div>
    </Dialog>
  );
}
