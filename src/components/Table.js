import React, {Component} from 'react';
import {PropTypes} from 'prop-types';

class Table extends Component {
	constructor(props) {
        super(props)
		this.people = [
			{
				name: "John Sina",
				birth: "11/30/2011"
			}, {
				name: "Barcy Washington",
				birth: "09/16/1992"
			}, {
				name: "Peter Parker",
				birth: "01/16/1992"
			}, {
				name: "Jimmy Shergil",
				birth: "12/12/2001"
			}, {
				name: "Alexander Alfred",
				birth: "02/09/1891"
			}, {
				name: "Krishna Gupta",
				birth: "12/01/1982"
			}, {
				name: "Sania Mirza",
				birth: "11/30/2011"
			}, {
				name: "Lata Pathak",
				birth: "10/31/1999"
			}
		];
		this.state = {
			people : this.people
		}
	}
	compareDates(person1, person2) {
		// complete this date comparator which enables sort by age
		console.log("sorting by date");
		
		this.state.people.sort((a, b) => {
			let dateA = new Date(a.birth);
			let dateB = new Date(b.birth);

			if(dateA.getTime() < dateB.getTime()) return -1;
			if(dateB.getTime() < dateA.getTime()) return 1;
			return 0;	
		});
		
		
		
	}

	compareNames(person1, person2) {
		// complete this string comparator with enables sort by name
		console.log("sorting by name");
		this.state.people.sort((a, b) => {
			return ('' + a.name).localeCompare(b.name);	
		});
	}

	renderRows(){
		
		if(this.props.sortParameter=="name") this.compareNames()
		if(this.props.sortParameter=="age") this.compareDates()
		

		return this.state.people.map((person, index) => {
			const { name, birth } = person 
			return (
			   <tr key={index}>
				  <td>{name}</td>
				  <td>{birth}</td>
				</tr>
			)
		 })
	}

	render() {
		return (
  <div className='table-div'>
    <table className='table table-striped table-bordered table-hover full-width'>
      <thead>
        <tr>
          <th className='course-name'>Person Name</th>
          <th className='duration'>Date of Birth</th>
        </tr>
      </thead>
      <tbody>
	  	{this.renderRows()}
      </tbody>
    </table>
  </div>
);

	}
}

// Uncomment the snippet below
// Table.propTypes = {
// 	sortParameter: PropTypes.string
// }

export default Table;
