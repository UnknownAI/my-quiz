
import { FC, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/useTypedSelector';
import { getSets } from '../../actions/sets';
import { ISet } from '../../types/types';

const SetsList = () => {
    const sets = useAppSelector(state => state.sets);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getSets());
    }, [dispatch]);


    return (
        <div className='sets-page'>
            <div className='sets-page__header'>
                <h3>Sets List</h3>
            </div>
            {
                sets && !!sets.length &&
                <ul className='sets-list'>
                    {
                        sets.map((set: ISet) =>
                            <li className='sets-list__item' key={set._id}>
                                {set.title}
                            </li>)
                    }
                </ul>

            }
        </div>)

}

export default SetsList;