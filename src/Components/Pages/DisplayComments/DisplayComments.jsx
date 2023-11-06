import { PropTypes } from "prop-types";


const DisplayComments = ({userComment}) => {
    const {comment,userProfile,userName} = userComment;
    return (
        <div className="flex items-center gap-3 bg-slate-200 pl-1 pr-5 w-fit py-1 rounded-full">
          <div className="avatar">
            <div className="w-10 rounded-full">
              <img src={userProfile} />
            </div>
          </div>
          <div className="text-sm">
            <h1 className="font-bold">{userName}</h1>
            <p>{comment}</p>
          </div>
        </div>
    );
};

DisplayComments.propTypes = {
    userComment: PropTypes.object
}

export default DisplayComments;