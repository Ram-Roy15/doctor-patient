import { Link } from "react-router-dom";

const JobsCard = ({ job }) => {
  const { _id,category, job_title, min_price, max_price, deadline, description } =
    job || {};
  return (
    <Link to={`job/${_id}`}>
      <div className="max-w-2xl px-8 py-4 bg-white rounded-lg shadow-md dark:bg-gray-800">
        <div className="flex items-center justify-between">
          <span className="text-sm font-light text-gray-600 dark:text-gray-400">
            {deadline}
          </span>
          <a
            className="px-3 py-1 text-sm font-bold text-gray-100 transition-colors duration-300 transform bg-gray-600 rounded cursor-pointer hover:bg-gray-500"
            role="button"
          >
            {category}
          </a>
        </div>

        <div className="mt-2">
          <a
            href="#"
            className="text-xl font-bold text-gray-700 dark:text-white hover:text-gray-600 dark:hover:text-gray-200 hover:underline"
            role="link"
          >
            {job_title}
          </a>
          <p className="mt-2 text-gray-600 dark:text-gray-300">{description}</p>
        </div>

        <div className="flex items-center justify-between mt-4">
          <p className="text-lg font-bold text-gray-700 dark:text-white">
            Range: ${min_price}-{max_price}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default JobsCard;
