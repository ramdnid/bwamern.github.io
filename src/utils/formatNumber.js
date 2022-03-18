// Script pemformatan number agar ditampilkan dengan format number negara indonesia.
export default (number) => {
    const formatNumbering = new Intl.NumberFormat('id-ID');
    return formatNumbering.format(number);
};