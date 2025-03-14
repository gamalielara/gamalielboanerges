interface IProps {
  tagName: string;
}

const ProjectTag: React.FC<IProps> = ({ tagName }) => {
  return (
    <span className="bg-black text-white text-xs rounded-xl mr-1 my-1 first:ml-0 py-1 px-2 whitespace-nowrap">
      { tagName }
    </span>
  );
};

export default ProjectTag;
