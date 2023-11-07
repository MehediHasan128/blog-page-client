import { PropTypes } from 'prop-types';

const DisplayTableBlogs = ({blog, idx}) => {

    const {title, writerName, writerProfile} = blog;

    return (
        <div>
        <tr className="flex justify-between">
        <td>
            {idx + 1}
        </td>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={writerProfile} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
          </div>
        </td>
        <td>
         {title}
        </td>
        <th>
          {writerName}
        </th>
      </tr>
        </div>
    );
};

DisplayTableBlogs.propTypes = {
    blog: PropTypes.object,
    idx: PropTypes.index
}

export default DisplayTableBlogs;