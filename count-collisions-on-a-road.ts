function countCollisions(directions: string): number {
    directions = directions.replace(/^L+/, "");
    
    directions = directions.replace(/R+$/, "");

    return (directions.match(/R/g) || []).length + (directions.match(/L/g) || []).length;
}