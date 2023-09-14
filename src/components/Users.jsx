import userStyles from './UserStyles.module.css'

export default function User({ id, name  }) {

  return (
    <div className={userStyles.mainUser}>
      <div>Id: {id}</div>
      <div>Name: {name}</div>
    </div>
  );
}
