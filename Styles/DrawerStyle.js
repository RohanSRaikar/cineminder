import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
	container: {
		flex: 1,
        paddingLeft: 10,
        paddingRight:10,
        justifyContent: 'flex-start',
        
	},
	drawerList: {
        
	},
	drawerListIcon: {
		width: 27
	},
	drawerListItem: {
		flexDirection: 'row',
		alignItems: 'center',
        marginBottom: 23,
        borderBottomWidth:0.5,
        borderColor:'#616161',
        paddingBottom:5
        
	},
	drawerListItemText: {
		color: 'white',
		fontSize: 23,
		paddingLeft: 15,
        flex: 1
        
	},
	linearGradient: {
		// top: 0,
		// left: 0,
		// right: 0,
		// height: 248,
		///position: 'absolute',
        flex: 1,
        backgroundColor:'#263238',
        width:310
        
	},
	_version: {
		color: '#3c3c3c',
		position: 'absolute',
		bottom: 25,
		marginLeft: 53
    },
    logo:{
        marginBottom:60,
        marginTop:30,
    }
});

export default styles;