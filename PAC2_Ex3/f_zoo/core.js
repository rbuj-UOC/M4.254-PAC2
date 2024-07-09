const data = require('./data');

function entryCalculator(entrants) {
  if (entrants == null || entrants === undefined || !(entrants instanceof Object) || JSON.stringify(entrants) === '{}') {
    return 0;
  }
  return Object.entries(entrants).reduce((accumulator, [key, value]) => accumulator + data.prices[key] * value, 0);
}

function schedule(dayName) {
  const twelveHourClock = (hour) => (hour < 12 ? `${hour}am` : `${hour - 12}pm`);
  let h = dayName == null || dayName === undefined ? Object.entries(data.hours) : Object.entries(data.hours).filter((obj) => obj[0] === dayName);
  return h
    .map(([day, { open, close }]) => {
      return [day, open === close ? 'CLOSED' : `Open from ${twelveHourClock(open)} until ${twelveHourClock(close)}`];
    })
    .reduce((o, [key, value]) => ({ ...o, [key]: value }), {});
}

function animalCount(species) {
  if (species == null || species === undefined) {
    return data.animals.map((animal) => [animal.name, animal.residents.length]).reduce((o, [key, value]) => ({ ...o, [key]: value }), {});
  }
  return data.animals.filter((animal) => animal.name === species)[0].residents.length;
}

function animalMap(options) {
  let ans = {};
  if (options == null || options === undefined) {
    ans = data.animals.reduce((acc, current) => {
      acc[current.location] = acc[current.location] ?? [];
      acc[current.location].push(current.name);
      return acc;
    }, {});
  }
  if (options instanceof Object) {
    if (options.hasOwnProperty('includeNames') && options.includeNames) {
      if (options.hasOwnProperty('sex') && (options.sex === 'male' || options.sex === 'female')) {
        ans = data.animals.reduce((acc, current) => {
          acc[current.location] = acc[current.location] ?? [];
          acc[current.location].push({ [current.name]: current.residents.filter((f) => f.sex === options.sex).map((a) => a.name) });
          return acc;
        }, {});
      } else {
        ans = data.animals.reduce((acc, current) => {
          acc[current.location] = acc[current.location] ?? [];
          acc[current.location].push({ [current.name]: current.residents.map((a) => a.name) });
          return acc;
        }, {});
      }
    } else {
      if (options.hasOwnProperty('sex') && (options.sex === 'male' || options.sex === 'female')) {
        return data.animals.reduce((acc, current) => {
          const numElem = current.residents.filter((f) => f.sex === options.sex).reduce((acc) => acc + 1, 0);
          if (numElem > 0) {
            acc[current.location] = acc[current.location] ?? [];
            acc[current.location].push(current.name);
          }
          return acc;
        }, {});
      }
    }
  }
  return ans;
}

function animalPopularity(rating) {
  let ans = {};
  if (rating == null || rating === undefined) {
    ans = data.animals.reduce((acc, current) => {
      acc[current.popularity] = acc[current.popularity] ?? [];
      acc[current.popularity].push(current.name);
      return acc;
    }, {});
  } else {
    ans = data.animals
      .filter((f) => f.popularity === rating)
      .reduce((acc, current) => {
        acc.push(current.name);
        return acc;
      }, []);
  }
  return ans;
}

function animalsByIds(ids) {
  if (ids == null || ids === undefined) {
    return [];
  }
  if (Array.isArray(ids)) {
    return data.animals.filter((f) => ids.includes(f.id));
  }
  return data.animals.filter((f) => f.id === ids);
}

function animalByName(animalName) {
  let ans = {};
  if (animalName == null || animalName === undefined) {
    return ans;
  }
  if (data.animals.map((a) => a.residents.some((r) => r.name === animalName)).some((r) => r === true)) {
    ans = data.animals
      .filter((a) => a.residents.some((r) => r.name === animalName))
      .map(({ name, residents }) => {
        const resident = residents.filter((f) => f.name === animalName)[0];
        return {
          name: resident.name,
          sex: resident.sex,
          age: resident.age,
          species: name
        };
      })[0];
  }
  return ans;
}

function employeesByIds(ids) {
  if (ids == null || ids === undefined) {
    return [];
  }
  if (Array.isArray(ids)) {
    return data.employees.filter((f) => ids.includes(f.id));
  }
  return data.employees.filter((f) => f.id === ids);
}

function employeeByName(employeeName) {
  let ans = {};
  if (employeeName != null && employeeName !== undefined) {
    ans = data.employees.filter((f) => f.firstName === employeeName);
    if (ans.length > 0) {
      ans = ans[0];
    } else {
      ans = data.employees.filter((f) => f.lastName === employeeName);
      if (ans.length > 0) {
        ans = ans[0];
      }
    }
  }
  return ans;
}

function managersForEmployee(idOrName) {
  let ans = {};
  if (idOrName != null && idOrName !== undefined) {
    const findManagers = (ids) =>
      data.employees
        .filter((f) => ids.includes(f.id))
        .reduce((acc, current) => {
          acc.push(`${current.firstName} ${current.lastName}`);
          return acc;
        }, []);
    ans = data.employees.filter((f) => f.id === idOrName);
    if (ans.length > 0) {
      ans = ans[0];
      ans.managers = findManagers(ans.managers);
    } else {
      ans = data.employees.filter((f) => f.firstName === idOrName);
      if (ans.length > 0) {
        ans = ans[0];
        ans.managers = findManagers(ans.managers);
      } else {
        ans = data.employees.filter((f) => f.lastName === idOrName);
        if (ans.length > 0) {
          ans = ans[0];
          ans.managers = findManagers(ans.managers);
        }
      }
    }
  }
  return ans;
}

function employeeCoverage(idOrName) {
  const findAnimals = (ids) =>
    data.animals
      .filter((f) => ids.includes(f.id))
      .reduce((acc, current) => {
        acc.push(current.name);
        return acc;
      }, []);
  let ans = {};
  if (idOrName == null || idOrName === undefined) {
    return data.employees.reduce((acc, current) => {
      acc[`${current.firstName} ${current.lastName}`] = findAnimals(current.responsibleFor);
      return acc;
    }, {});
  }
  if (idOrName == null || idOrName === undefined) {
    return data.employees.reduce((acc, current) => {
      acc[`${current.firstName} ${current.lastName}`] = findAnimals(current.responsibleFor);
      return acc;
    }, {});
  } else {
    ans = data.employees
      .filter((f) => f.id === idOrName)
      .reduce((acc, current) => {
        acc[`${current.firstName} ${current.lastName}`] = findAnimals(current.responsibleFor);
        return acc;
      }, {});
    if (JSON.stringify(ans) === '{}') {
      ans = data.employees
        .filter((f) => f.firstName === idOrName)
        .reduce((acc, current) => {
          acc[`${current.firstName} ${current.lastName}`] = findAnimals(current.responsibleFor);
          return acc;
        }, {});
    }
    if (JSON.stringify(ans) === '{}') {
      ans = data.employees
        .filter((f) => f.lastName === idOrName)
        .reduce((acc, current) => {
          acc[`${current.firstName} ${current.lastName}`] = findAnimals(current.responsibleFor);
          return acc;
        }, {});
    }
  }
  return ans;
}

module.exports = {
  entryCalculator,
  schedule,
  animalCount,
  animalMap,
  animalPopularity,
  animalsByIds,
  animalByName,
  employeesByIds,
  employeeByName,
  managersForEmployee,
  employeeCoverage
};
