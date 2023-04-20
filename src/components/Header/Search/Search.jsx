import "./Search.scss";
import {MdClose} from "react-icons/md"
import {Fragment} from "react";
const Search = ({closeSearch}) => {
    return(
        <Fragment>
            <div className="search-modal">
                <div className="form-field">
                        <input
                             type="text"
                             autoFocus={true}
                             placeholder="Search for products"
                        />
                    <MdClose onClick={closeSearch}/>
                </div>
            </div>
        </Fragment>
    );
};

export default Search;
