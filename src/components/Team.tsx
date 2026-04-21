import { Link } from 'react-router-dom';
import { teamMembers } from '../data/teamMembers';

export function Team() {
  return (
    <section id="team" className="py-20 border-b border-black">
      <div className="max-w-[1200px] mx-auto px-5">
        <h2 className="mb-10">Our Team</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <Link
              key={member.name}
              to={`/team#${member.id}`}
              className="border border-black p-5 hover:bg-[var(--color-navy)]/5 transition-colors duration-300 block"
            >
              <h3 className="mb-1">{member.name}</h3>
              <span className="text-sm uppercase text-gray-600 mb-4 block">
                {member.role}
              </span>
              <p>{member.shortDescription}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}